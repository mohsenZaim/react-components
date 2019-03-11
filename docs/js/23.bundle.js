(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1139:function(e,t,n){"use strict";n.r(t);var o=n(36),r=n(0),i=(n(856),function(e){var t="input-field";return e.error&&(t+=" has-error"),e.inline&&(t+=" inline"),r.createElement("div",{className:"form-group radio-holder"+(e.className?" "+e.className:"")},r.createElement("div",{className:t},e.label&&r.createElement("label",{className:"radio-group-label",htmlFor:e.name},e.label),e.list&&e.list.map(function(t,n){return r.createElement("div",{key:n,className:"radio-item"},r.createElement("label",{className:"radio-label",htmlFor:t.label},t.label),r.createElement("input",{className:"radio-input",type:"radio",value:t.value,name:t.group,id:t.label,checked:e.value===t.value,disabled:e.disableAll||t.disabled,onChange:function(n){e.onChange(t.value)}}),r.createElement("span",{className:"checkmark"}),t.description&&r.createElement("span",{className:"radio-description"},t.description))}),e.error&&r.createElement("div",{className:"alert alert-danger"},e.error)))}),a=n(399),d=n(400).default,l=n(858),s=function(e){function t(t){var n=e.call(this,t)||this;return n.state={radioList:[{value:"first",group:"my-group",label:"Radio 1"},{value:"second",group:"my-group",label:"Radio 2",description:"Some description"},{value:"third",group:"my-group",label:"Radio 3",description:"Disabled",disabled:!0}],radioListSelected:"second"},n}return o.b(t,e),t.prototype.render=function(){var e=this,t=Object(a.a)(this.props.location.search,"mode");return r.createElement("div",{className:"route-template "+("dl"===t||"DL"===t?"brief":"")},r.createElement("div",{className:"info-holder"},r.createElement("div",{className:"info"},r.createElement("div",{className:"md-file"},r.createElement(d,{innerHTML:!0},l))),r.createElement("div",{className:"info"},r.createElement("h2",null,"Output"),r.createElement("p",null,"Here are sample outputs, here is selected value: ",this.state.radioListSelected),r.createElement("div",{className:"result"},r.createElement(i,{name:"radioGroupName",list:this.state.radioList,value:this.state.radioListSelected,onChange:function(t){e.setState({radioListSelected:t})}})))))},t}(r.Component);t.default=s},399:function(e,t,n){"use strict";function o(e,t){var n=RegExp("[?&]"+t+"=([^&]*)").exec(e);return n&&decodeURIComponent(n[1].replace(/\+/g," "))}n.d(t,"a",function(){return o})},856:function(e,t,n){var o=n(857);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(58)(o,r);o.locals&&(e.exports=o.locals)},857:function(e,t,n){(e.exports=n(54)(!1)).push([e.i,'.form-group.radio-holder .input-field {\n  position: relative;\n  margin: 10px 20px 10px 0px;\n  user-select: none;\n  transition: all 200ms; }\n  .form-group.radio-holder .input-field .radio-item {\n    position: relative;\n    margin-bottom: 5px; }\n    .form-group.radio-holder .input-field .radio-item input[type=radio] {\n      position: absolute;\n      opacity: 0;\n      left: 1px;\n      height: 24px;\n      width: 24px;\n      z-index: 2;\n      cursor: pointer; }\n      .form-group.radio-holder .input-field .radio-item input[type=radio]:hover + span {\n        border-color: #41B0EE; }\n      .form-group.radio-holder .input-field .radio-item input[type=radio]:checked ~ .checkmark {\n        background-color: #ffffff; }\n        .form-group.radio-holder .input-field .radio-item input[type=radio]:checked ~ .checkmark:after {\n          display: block; }\n      .form-group.radio-holder .input-field .radio-item input[type=radio][disabled] ~ .checkmark {\n        border: 1px solid #868686;\n        background-color: #dedede; }\n    .form-group.radio-holder .input-field .radio-item .checkmark {\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 24px;\n      width: 24px;\n      background-color: #ffffff;\n      border: 1px solid #dedede;\n      border-radius: 50%; }\n      .form-group.radio-holder .input-field .radio-item .checkmark:after {\n        content: "";\n        display: none;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        width: 15px;\n        height: 15px;\n        border-radius: 50%;\n        background: #41B0EE;\n        margin: 0; }\n    .form-group.radio-holder .input-field .radio-item label.radio-label {\n      padding-left: 35px;\n      display: inline-block;\n      height: 24px;\n      cursor: pointer;\n      user-select: none;\n      font-size: 16px;\n      font-weight: normal; }\n    .form-group.radio-holder .input-field .radio-item .radio-description {\n      color: #868686;\n      display: inline-block;\n      margin-left: 8px; }\n  .form-group.radio-holder .input-field .alert {\n    opacity: 0;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n    color: #000;\n    transition: all 200ms; }\n  .form-group.radio-holder .input-field.has-error {\n    background-color: #ffd1d1;\n    border: 1px solid #F03529;\n    border-radius: 4px;\n    padding: 5px 10px; }\n    .form-group.radio-holder .input-field.has-error .alert {\n      opacity: 1; }\n  .form-group.radio-holder .input-field.inline .radio-item {\n    display: inline-block; }\n    .form-group.radio-holder .input-field.inline .radio-item:not(:last-child) {\n      margin-right: 10px; }\n',""])},858:function(e,t){e.exports='<hr>\n<p>title: Radio Group\ncomponentid: component-radiogroup\nvariantid: default</p>\n<h2 id="guid-radiogroup-guid-default-component-react">guid: &#39;radiogroup-guid-default-component-react&#39;</h2>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Radio Group Component\nComponent: &quot;RadioGroup&quot;\nSelector: &quot;&lt;RadioGroup/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/RadioGroup&quot;\nType: Form Component</code></pre>\n<h2 id="element-information">Element Information</h2>\n<p>This React component is based on SEB Bootstrap style. Supports customization and configurations. The component name is <code>RadioGroup</code> and the selector is <code>&lt;RadioGroup/&gt;</code>.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;RadioGroup\n    name=&quot;radioGroupName&quot;\n    list={this.state.radioList}\n    value={this.state.radioListSelected}\n    onChange={(value) =&gt; { this.setState({ radioListSelected: value }) }}\n/&gt;   </code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Descrition</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>value</td>\n<td><code>any</code></td>\n<td>string or number</td>\n</tr>\n<tr>\n<td>list</td>\n<td><code>Array&lt;RadioListModel&gt;</code><sup>1</sup></td>\n<td>The list of radio items</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td><code>(event: any) =&gt; void</code></td>\n<td>on change event</td>\n</tr>\n<tr>\n<td>name?</td>\n<td><code>boolean</code></td>\n<td>element name</td>\n</tr>\n<tr>\n<td>label?</td>\n<td><code>string</code></td>\n<td>The label for the whole group</td>\n</tr>\n<tr>\n<td>error?</td>\n<td><code>string</code></td>\n<td>Error message (if any)</td>\n</tr>\n<tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>Custom class can be passed here</td>\n</tr>\n<tr>\n<td>disableAll?</td>\n<td><code>boolean</code></td>\n<td>Disable all radio items</td>\n</tr>\n<tr>\n<td>inline?</td>\n<td><code>boolean</code></td>\n<td>Display radio items inline</td>\n</tr>\n</tbody></table>\n<h2 id="footnote">Footnote</h2>\n<ol>\n<li><code>list</code> array has an exported interface named <code>RadioGroupItem</code>:<pre><code class="language-typescript">{\n   group: string;\n   value: any;\n   label: string;\n   description?: string;\n   disabled?: boolean;\n}</code></pre>\n</li>\n</ol>\n<p>:::iframe(<a href="https://github.sebank.se/pages/DesignLibrary/ReactComponents/#/radiogroup?mode=DL">https://github.sebank.se/pages/DesignLibrary/ReactComponents/#/radiogroup?mode=DL</a>, 130)</p>\n'}}]);