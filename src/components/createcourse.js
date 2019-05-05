import React,{Component} from 'react';
import axios from 'axios';


class Course extends Component {

    constructor(props){
        super(props);
        

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDes = this.onChangeDes.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            title:"",
            des:"",
            image:"",
            link:""

        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDes(e) {
        this.setState({
            des: e.target.value
        });
    }

    onChangeImage(e) {
        this.setState({
            image: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        const newCourse = {
            title: this.state.title,
            des: this.state.des,
            image:this.state.image,
            
        }

        axios.post('https://morning-castle-57709.herokuapp.com/course/add', newCourse)
            .then(res => console.log(res.data));

        this.setState({
            title: '',
            des: '',
            image: '',
            link: ''
        })
    }

    render(){
        return  (
            <div style={{marginTop: 20}}>
                <h3>Create New Course</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.des}
                                onChange={this.onChangeDes}
                                />
                    </div>
                    <div className="form-group">
                        <label>Image Link: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.image}
                                onChange={this.onChangeImage}
                                />
                    </div>                    

                    <div className="form-group">
                        <input type="submit" value="Create Course" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )

    }
   
}

export default Course;