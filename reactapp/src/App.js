import React , {Component} from "react";
import Container from "./components/container";
import Row from "./components/row";
import Col from "./components/col";
import Search from "./components/search";
import Table from "./components/table";
import API from "./utils/API";
// obj={
//     name:"phil",
//     email:"ploy3_@yaho.com"
// }
// obj.name
// obj.email
// ---destruct---
// const {name,email}=obj
// name,
// email
class App extends Component {
    state = {
        ApiResults : [], 
        Original : [],
        Search : ""
    }
    componentDidMount(){
        API.getUsers("").then(res =>{
            this.setState({
                ApiResults : res.data.results, 
                Original : res.data.results
            })
        })
    }

 handleChange = event =>{
     const{ name, value} = event.target   
    this.setState({
        [name] : value
    })
    console.log(value)
    let newResults = this.state.Original.filter(person =>{  //phillip - lip -1
        return  person.name.first.toLowerCase().indexOf(value.toLowerCase())> -1
    })

    this.setState({
        ApiResults : newResults
    })
 }

 render(){
     return(
         <Container>
            <Row>
            <Col size ="12">
            <Search  handleChange = {this.handleChange}  Search = {this.state.Search} />
            {console.log(this.state.ApiResults)}
            <Table ApiResults = {this.state.ApiResults}   />
            </Col>
            </Row>
         </Container>
     )
 }
}

export default App;