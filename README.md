# Try all of the concepts

do `yarn start` to compile the javascript by real time


# 筆記
state 裡面只能放單層 Object 
EX 
State: {
  form : {
    name: 這樣是不行的
  }
}

在HTML標籤裡面放這個 `value={this.state.name} `只是設定他的defualt，不能改變值

改值需要靠 `onChange={(e) => this.handleChange(e)}`