import React from 'react'
import * as postcss from 'postcss';

export default React.createClass({

    getDefaultProps: function () {
        return {
            type: 'text/css',
            rel: 'stylesheet',
            processors: []
        }
    },

    compile: function() {
        return postcss.default(this.props.processors).process(this.props.children).css;
    },

    render: function () {
        return (
            <style type={this.props.type} rel={this.props.rel}>{this.compile()}</style>
        )
    }

});
