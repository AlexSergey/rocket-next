import React, {Component} from 'react';
import {GET_POSTS, REMOVE_POST, ADD_POST} from './actions/crud';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    posts: state.crud
});

const mapDispatchToProps = (dispatch) => ({
    getPosts:        ()       => dispatch(GET_POSTS()),
    removePost:      (id)     => dispatch(REMOVE_POST(id)),
    addPost:         (data)   => dispatch(ADD_POST(data))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class CRUD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            posts: [],
            description: ''
        };
    }
    componentWillMount() {
        this.props.getPosts();
    }
    addNew() {
        var title = this.refs.name.value;
        var description = this.refs.description.value;

        this.props.addPost({
            title,
            description
        }).then(() => this.setState({name: '', description: ''}));
    }

    nameChange(e) {
        this.setState({name: e.target.value});
    }

    changeDescription(e) {
        this.setState({description: e.target.value});
    }
    render() {
        return (
            <div>
                <h1>Posts</h1>
                <ul className="posts-list">
                    {this.props.posts.data.map((item, index) => <li key={index}>
                        <strong>{item.title}</strong>
                        <span>{item.description}</span>
                        <button className="btn btn-danger" onClick={() => this.props.removePost(item.id)}>Remove it</button>
                    </li>)}
                </ul>
                <div className="simple-form">
                    <div className="input-group">
                        <input className="form-control" type="text" ref="name" value={this.state.name} onChange={this.nameChange.bind(this)} />
                    </div>
                    <div className="input-group">
                        <textarea  className="form-control" ref="description" onChange={this.changeDescription.bind(this)} value={this.state.description}></textarea>
                    </div>
                    <button className="btn btn-success" onClick={this.addNew.bind(this)}>add new posts</button>
                </div>
            </div>
        );
    }
}