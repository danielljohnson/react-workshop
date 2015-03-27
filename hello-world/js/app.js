// Hello world
// React.render(
//     <div>
//         <h2>Hello, world!</h2>
//         <p>{1+1}</p>
//     </div>,
//     document.body
// );

// First component
// var JobList = React.createClass({
//     render: function() {
//         return (
//             <p>I'm a component</p>
//         );
//     }
// });

// React.render(
//     <JobList/>,
//     document.body
// );

// Props
// var JobList = React.createClass({
//     render: function() {
//         return (
//             <h3>There are {this.props.numJobs} jobs.</h3>
//         );
//     }
// });

// React.render(
//     <JobList numJobs="10" />,
//     document.body
// );

// Nested components
// var Job = React.createClass({
//     render: function() {
//         return (
//             <p>{this.props.title}</p>
//         );
//     }
// });

// var JobList = React.createClass({
//     render: function() {
//         return (
//             <section>
//                 <h3>There are {this.props.numJobs} jobs.</h3>

//                 <Job title="JS Developer" />
//                 <Job title="Rails Developer"/>
//             </section>
//         );
//     }
// });

var Recipe = React.createClass({
    render: function() {
        return (
            <div>
              <p>{this.props.title}</p>
              <p>{this.props.mainIngredient}</p>
            </div>
        );
    }
});

var RecipeList = React.createClass({
    render: function() {
        return (
            <section>
                <h3>There are {this.props.numRecipes} recipes.</h3>

                <Recipe title="Sugar Cookies" mainIngredient="Sugar" />
                <Recipe title="Brownies" mainIngredient="Chocolate"/>
            </section>
        );
    }
});

React.render(
    <RecipeList numRecipes="90" />,
    document.body
);

// Passing external data down through components
// var jobs = [{
//     title: 'JS Developer'
// },{
//     title: 'Rails Developer'
// }];

// var Job = React.createClass({
//     render: function() {
//         return (
//             <p>{this.props.job.title}</p>
//         );
//     }
// });

// var JobList = React.createClass({
//     render: function() {
//         var jobs = this.props.jobs.map(function(item, i) {
//             return (
//                 <Job job={item} key={i}/>
//             );
//         });

//         return (
//             <section>
//                 <h3>There are {this.props.jobs.length} jobs.</h3>

//                 {jobs}
//             </section>
//         );
//     }
// });

// React.render(
//     <JobList jobs={jobs} />,
//     document.body
// );

// Events
// var jobs = [{
//     title: 'JS Developer'
// },{
//     title: 'Rails Developer'
// }];

// var Job = React.createClass({
//     handleClick: function(e) {
//         e.preventDefault();

//         console.log(this.props.job.title);
//     },

//     render: function() {
//         return (
//             <p><a href="#" onClick={this.handleClick}>{this.props.job.title}</a></p>
//         );
//     }
// });

// var JobList = React.createClass({
//     render: function() {
//         var jobs = this.props.jobs.map(function(item, i) {
//             return (
//                 <Job job={item} key={i}/>
//             );
//         });

//         return (
//             <section>
//                 <h3>There are {this.props.jobs.length} jobs.</h3>

//                 {jobs}
//             </section>
//         );
//     }
// });

// React.render(
//     <JobList jobs={jobs} />,
//     document.body
// );
