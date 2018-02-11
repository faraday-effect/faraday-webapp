// @flow

import React, {Component} from 'react';
import {Footer} from "./components/Footer";
import {getCourses} from "../reducers/courses";
import {connect} from "react-redux";
import type {State as CoursesState} from '../reducers/courses';
import {NavBar} from "./components/NavBar";

type Props = {
    courses: CoursesState,
    getCourses: Function
};

class Courses extends Component<Props> {
    componentDidMount() {
        this.props.getCourses();
    }

    render() {
        return (
            <div>
                <NavBar/>
                <section className="section">
                    <div className="container">
                        <h1 className="title is-1">Courses</h1>
                        <ul>
                            {this.props.courses.map(course => <li key={course._id}>{course.designation}&mdash;{course.title}</li>)}
                        </ul>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({courses: state.courses});
export default connect(mapStateToProps, {getCourses})(Courses);
