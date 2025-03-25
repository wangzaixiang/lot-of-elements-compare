import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

var count = 0;

@customElement("perf-comp-00")
class PerfComponent00 extends LitElement {
    @property({type: String}) content = "0";

    // static styles = css`
    //      div {
    //          display: inline;
    //      }
    //      `;

    constructor() {
        super();
        count += 1;
    }

    render() {
        return html` <div style="display: inline">${this.content}</div>`
    }
}

@customElement("perf-comp-01")
class PerfComponent01 extends LitElement {
    @property({type: String}) content = "1";

    render(){
        return html`
            <perf-comp-00 content=${this.content}></perf-comp-00>
            <perf-comp-00 content=""></perf-comp-00>
            <perf-comp-00 content=""></perf-comp-00>
            <perf-comp-00 content=""></perf-comp-00>
            <perf-comp-00 content=""></perf-comp-00>
            `;
    }
}


// 100 * 2 * 5 = 1000

@customElement("perf-comp-10")
class PerfComponent10 extends LitElement {

    @property({type: String}) content = "1";

    render(){
        let upper = this.content.toUpperCase();
        // generate 10 `perf-comp-01` elements
        let  children1 = Array.from({length: 100}, (_, i) => html`<perf-comp-01 content=${this.content}></perf-comp-01>`);
        let  children2 = Array.from({length: 100}, (_, i) => html`<perf-comp-01 content=${upper}></perf-comp-01>`);
        return html`
            <div> ${children1} </div>
            <div> ${children2} </div>
        `;
    }

}

@customElement("perf-comp-11")
class PerfComponent11 extends LitElement {
    @property({type: String}) content = "1";

    render(){
        return html`
            <perf-comp-10 content=${this.content}></perf-comp-10>
            `;
    }
}

@customElement("perf-comp-20")
class PerfComponenet20 extends LitElement {
    @property({type: String}) content = "helloworld";

    render() {
        let children = this.content.split("").map( c => html`<perf-comp-11 content=${c}></perf-comp-11>` );
        return html`
            <div>
                ${children}
            </div>
        `;
    }
}


// 2. 容器组件控制批量加载
@customElement('perf-test-container')
class PerfTestContainer extends LitElement {

    handleClick() {
        console.info("counter = ", count);
    }

    render() {
        return html`
            <h1>Lit Element + Shadow DOM + inlined style + div.text </h1>
            <div>
                <perf-comp-20 content="abcdefghijklmnopqrstuvwxyz"></perf-comp-20>
            </div>
            <button @click=${this.handleClick}>click</button>
        `;
    }
}