import React from 'react';

class Manga extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            author: ''

        }
    }

    componentDidMount(){

        const url = `http://localhost:3000/api/${this.state.id}.json`;

        // console.log('Manga#componentDidMount url', url);

        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            // console.log('Manga#componentDidMount json', json);

            const name = json.name;
            const author = json.author;

            this.setState({
                name,
                author
            });
            
            console.log('Manga#componentDidMount this.state.name', this.state.name);
            console.log('Manga#componentDidMount this.state.author', this.state.author); 

        });
        
    }

    componentDidUpdate(prevProps, prevState){
        const id = this.props.match.params.id;

        console.log('componentDidUpdate prevState.id', prevState.id);
        // console.log('componentDidUpdate prevProps', prevProps);
        console.log('componentDidUpdate this.props.match.params.id', id);
        console.log('componentDidUpdate change ?', id !== prevState.id);
        if(prevState.id !== id){

            const url = `http://localhost:3000/api/${id}.json`;
                fetch(url)
                .then(resp => resp.json())
                .then(json => {
                    const name = json.name;
                    const author = json.author;
                    this.setState({name, author, id});
            });



        }
        
    }


    render() {
        return (
        <div>
            <p>{this.state.name}</p>
            <p>{this.state.author}</p>
        </div>
        );
    }
}

export default Manga;