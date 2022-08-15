import React from 'react';

class StudentUnmount extends React.Component {
    componentWillUnmount()
    {
        alert('ComponentWillUnmount Called')
    }
    render() {
        return (
            <div>
                <h5>Student Unmount</h5>
            </div>
        )
    }

}



export default StudentUnmount;