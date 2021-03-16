import { TableMaterialUI } from "./index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createSchoolchild } from "../../redux/actions/actions";

const mapStateToProps = (state)=> {

    return {
        schoolboys: state.schoolchild,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        createSchoolchild
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TableMaterialUI);