import React from 'react';
// import ChangePropsClassComp from './ChangePropsClassComp';
class PropsinClassCom extends React.Component {

    render() {

        return (
            <div>
                <h4>Props in Class Component</h4>
                <h6>Props:{this.props.pname}</h6>
                <h6>Props:{this.props.email}</h6>
                {/* <h6>Name:{this.state.name}</h6> */}
                {/* <h6>Email:{this.state.email}</h6>   */}
                {/* <h6>{this.state.vegi}</h6>  */}
                {/* <h6>{this.state.fruit}</h6>  */}
                {/* <ChangePropsClassComp name1="Vartika" name2="Yutika" /> */}


            </div>
        )
    }
}
export default PropsinClassCom;