import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { PostCard, PostForm } from '../../components'
import './index.scss'

export default class Index extends Component {
  state = {
    posts: [
      {
        title: '泰罗奥特曼',
        content: '泰罗是奥特之父和奥特之母唯一的亲生儿子。',
      },
    ],
    formTitle: '',
    formContent: '',
  }

  config = {
    navigationBarTitleText: '首页',
  }
  sub() {
    let {formTitle,formContent} = this.state;
    console.log('提交', formTitle)
    console.log('提交', formContent)
  }
  handleSubmit(e) {
    e.preventDefault()

    const { formTitle: title, formContent: content } = this.state
    const newPosts = this.state.posts.concat({ title, content })

    this.setState({
      posts: newPosts,
      formTitle: '',
      formContent: '',
    })
  }

  handleTitleInput(e) {
    this.setState({
      formTitle: e.target.value,
    })
  }

  handleContentInput(e) {
    this.setState({
      formContent: e.target.value,
    })
  }

  render() {
    let {posts} = this.state
    return (
      <View className="index">
        {posts.map((post, index) => (
          <PostCard key={index} title={post.title} content={post.content} t='aaaa' />
        ))}
        <PostForm
          handleSubmit={e => this.handleSubmit(e)}
          handleTitleInput={e => this.handleTitleInput(e)}
          handleContentInput={e => this.handleContentInput(e)}
          sub={this.sub.bind(this)}
        />
      </View>
    )
  }
}
