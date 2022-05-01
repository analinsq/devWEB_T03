import React, {Component} from "react";

class Arena extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.show}</h1>
                {
                    React.Children.map(
                        this.props.children,
                        (Hero) => {
                            return React.cloneElement(
                                Hero,
                                { arena:this.props.arena,
                                  enemy:this.props.enemy }
                            )
                        }
                    )
                }
            </div>
        )
    }
}

export default Arena;