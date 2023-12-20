import React, { PureComponent } from 'react'
import JSONEditor from 'jsoneditor'

import 'jsoneditor/dist/jsoneditor.css'
import './JsonEditor.css'

class JsonEditor extends PureComponent {
  // 监听输入值的变化
  onChange = () => {
    let value = this.jsoneditor.get()
    this.props.onChange && this.props.onChange(value)
    this.viewJsoneditor.set(value)
  }
  // 对外暴露获取编辑器的json数据
  getJson = () => {
    this.props.getJson && this.props.getJson(this.jsoneditor.get())
  }
  // 对外提交错误信息
  onError = (errArr) => {
    this.props.onError && this.props.onError(errArr)
  }

  initJsonEditor = () => {
    const options = {
      mode: 'code',
      history: true,
      onChange: this.onChange,
      onValidationError: this.onError
    };

    this.jsoneditor = new JSONEditor(this.container, options)
    this.jsoneditor.set(this.props.value)
    
  }

  initViewJsonEditor = () => {
    const options = {
      mode: 'preview'
    };

    this.viewJsoneditor = new JSONEditor(this.viewContainer, options)
    this.viewJsoneditor.set(this.props.value)

    
  }

  componentDidMount () {
    console.log('componentDidMount')
    // return;
    this.initJsonEditor()
    // this.initViewJsonEditor()
    // 设置主题色
    this.container.querySelector('.jsoneditor-menu').style.backgroundColor = this.props.themeBgColor
    this.container.querySelector('.jsoneditor').style.border = `thin solid ${this.props.themeBgColor}`
    // this.viewContainer.querySelector('.jsoneditor-menu').style.backgroundColor = this.props.themeBgColor
    // this.viewContainer.querySelector('.jsoneditor').style.border = `thin solid ${this.props.themeBgColor}`

    var logoHtml = document.querySelector('a.jsoneditor-poweredBy')
    if (logoHtml) {
        console.log('hidden1-', logoHtml)
        logoHtml.style.display = 'none'
    }
    
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
    if(this.jsoneditor) {
      this.jsoneditor.update(this.props.value)
      this.viewJsoneditor.update(this.props.value)

      
    }


  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    this.jsoneditor && this.jsoneditor.destroy()
    this.viewJsoneditor && this.viewJsoneditor.destroy()
  }

  render() {
    return (
      <div  className="container">
        <div className="editor-container" ref={elem => this.container = elem} />
        {/* <div className="editor-container" ref={elem => this.viewContainer = elem} /> */}
        {/* <div className="editor-container" >11</div>
        <div className="editor-container" >22</div> */}
      </div>
    );
  }
}

export default JsonEditor
