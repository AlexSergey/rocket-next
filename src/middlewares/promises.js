const middleware = store => next => action => {
    if (typeof action.promise === 'undefined') {
        return next(action);
    }

    const [startAction, successAction, failureAction] = action.actions;

    store.dispatch(startAction());

    action.promise.then(
        (data)  => store.dispatch(successAction(data)),
        (error) => store.dispatch(failureAction(error))
    );
};

export default middleware;
