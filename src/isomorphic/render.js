import serialize from 'serialize-javascript';

export const renderHeader = meta => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            ${meta}
        </head>
        <body>
            <div id="root">`;

export const renderFooter = (reduxState, css, scripts) => `</div>
        <script>
            window.REDUX_DATA = ${ serialize( reduxState, { isJSON: true } ) }
        </script>
        ${css}
        ${scripts}
        ${process.env.NODE_ENV === 'development' && process.env.__LIVE_RELOAD__ ?
            `<script src="http://localhost:${process.env.__LIVE_RELOAD__}/livereload.js"></script>` :
            ''
        }
    </body>
</html>
`;
