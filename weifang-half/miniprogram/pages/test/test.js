const { envList } = require('../../envList.js');

Page({
  data: {
    totalScope:'',
    quest: [
      {
      id: 1,
      type: 1, //类型，1.单选
      question: "1、房屋结构外观质量是否安全：用肉眼观察房屋，是否存在较大的倾斜，其倾斜率很可能超过1%，存在倒塌风险。",
      answers: [{
        index: 'A',
        content: '是'
      }, {
        index: 'B',
        content: '不是'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 2,
      type: 1, //类型，1.单选
      question: "2、房屋或者房屋附属设施（如围墙、地坪等）是否有裂缝，如果长度较长，裂缝较深，甚至穿透墙体，这种裂缝一般是结构破坏裂缝，代表房屋承载力已不足，存在垮塌风险，绝对不可以掉以轻心。",
      answers: [{
        index: 'A',
        content: '是'
      }, {
        index: 'B',
        content: '不是'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 3,
      type: 1, //类型，1.单选
      question: "3、房屋地势是否较低,基础部分如果经常浸泡在水里，容易引起基础承载力下降导致房屋不均匀沉降甚至倒塌。",
      answers: [{
        index: 'A',
        content: '是'
      }, {
        index: 'B',
        content: '不是'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 4,
      type: 1, //类型，1.单选
      question: "4、房屋的墙和梁板柱是否有裂缝，连接处是否有错位，梁板是否有变形?",
      answers: [{
        index: 'A',
        content: '是'
      }, {
        index: 'B',
        content: '不是'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 5,
      type: 1, //类型，1.单选
      question: "5、墙壁混凝土是否有脱落，钢筋是否外露?",
      answers: [{
        index: 'A',
        content: '是'
      }, {
        index: 'B',
        content: '不是'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 6,
      type: 1, //类型，1.单选
      question: "6、房屋是否存在渗漏、异响、门窗变形、地面沉陷等现象。",
      answers: [{
        index: 'A',
        content: '是'
      }, {
        index: 'B',
        content: '不是'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 7,
      type: 1, //类型，1.单选
      question: "7、房屋结构钢材是否存在锈蚀或者木结构木材虫蚀腐朽、木结构节点松脱失效。",
      answers: [{
        index: 'A',
        content: '是'
      }, {
        index: 'B',
        content: '不是'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 8,
      type: 1, //类型，1.单选
      question: "8、室内装修质量是否安全，包括木装修、室内粉刷、花饰线脚及墙、地砖等。",
      answers: [{
        index: 'A',
        content: '是'
      }, {
        index: 'B',
        content: '不是'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 9,
      type: 1, //类型，1.单选
      question: "9、室内设备运行是否正常，如厨卫、照明等设施。",
      answers: [{
        index: 'A',
        content: '是'
      }, {
        index: 'B',
        content: '不是'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 10,
      type: 1, //类型，1.单选
      question: "10、房屋周围是否存在施工，周边边坡、土坎是否滑移，挡土墙是否开裂，挡土墙排水孔是否能正常排水。",
      answers: [{
        index: 'A',
        content: '是'
      }, {
        index: 'B',
        content: '不是'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 11,
      type: 1, //类型，1.单选
      question: "11、房屋是否经历过自然灾害以及爆炸、火灾等事故造成房屋主体结构损坏。",
      answers: [{
        index: 'A',
        content: '是'
      }, {
        index: 'B',
        content: '不是'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 12,
      type: 1, //类型，1.单选
      question: "12、保证房屋安全要执行的“四要”：房屋建设要报批，要有房建审批文件，要按审批建设。",
      answers: [{
        index: 'A',
        content: '有'
      }, {
        index: 'B',
        content: '没有'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 13,
      type: 1, //类型，1.单选
      question: "13、保证房屋安全要执行的“四要”：房屋设计要正规，要有专业设计图纸，确保结构安全。",
      answers: [{
        index: 'A',
        content: '有'
      }, {
        index: 'B',
        content: '没有'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 14,
      type: 1, //类型，1.单选
      question: "14、保证房屋安全要执行的“四要”：房屋施工要规范：要有专业施工队伍按图施工，保证施工质量安全。",
      answers: [{
        index: 'A',
        content: '有'
      }, {
        index: 'B',
        content: '没有'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 15,
      type: 1, //类型，1.单选
      question: "14、保证房屋安全要执行的“四要”：隐患处置要及时：发现房屋存在安全隐患要委托具备资质的相关机构进行房屋安全鉴定，并按鉴定结论进行相应处置。",
      answers: [{
        index: 'A',
        content: '有'
      }, {
        index: 'B',
        content: '没有'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 16,
      type: 1, //类型，1.单选
      question: "16、房屋使用过程中是否擅自开挖地下室",
      answers: [{
        index: 'A',
        content: '是'
      }, {
        index: 'B',
        content: '不是'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 17,
      type: 1, //类型，1.单选
      question: "16、房屋使用过程中是否擅自加层或增加荷载",
      answers: [{
        index: 'A',
        content: '是'
      }, {
        index: 'B',
        content: '不是'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 18,
      type: 1, //类型，1.单选
      question: "18、房屋使用过程中是否在二次装修中擅自改变房屋结构",
      answers: [{
        index: 'A',
        content: '是'
      }, {
        index: 'B',
        content: '不是'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 19,
      type: 1, //类型，1.单选
      question: "19、房屋是否超过设计使用年限需继续使用。",
      answers: [{
        index: 'A',
        content: '是'
      }, {
        index: 'B',
        content: '不是'
      }],
      correctAnswer: 'B',
      scope: 5,
    },
    {
      id: 20,
      type: 1, //类型，1.单选
      question: "20、房屋地基基础、主体结构是否有明显下沉、裂缝、变形、腐蚀等现象。",
      answers: [{
        index: 'A',
        content: '是'
      }, {
        index: 'B',
        content: '不是'
      }],
      correctAnswer: 'B',
      scope: 5,
    },

    ]
  },

  
  // 点击问题答案触发事件
  answerSelected(e) {
    let outidx = e.currentTarget.dataset.outidx;
    let idx = e.currentTarget.dataset.idx;
    let question = this.data.quest[outidx];
    if (question.type == 1) {
      //单选
      for (let item of question.answers) {
        item.selected = false;
      }
      question.answers[idx].selected = true;
      this.setData({
        quest: this.data.quest
      });
    } else if (question.type == 2) {
      //多选
      question.answers[idx].selected = !question.answers[idx].selected;
      this.setData({
        quest: this.data.quest
      });
    }
  },
 // 点击提交按钮
 submit() {
  let {
    quest
  } = this.data;
  let totalScope = 0; //记录分数
  //用来保存选中的答案
  let answerSelected = [];
  for (let questItem of quest) {
    if (questItem.type == 1) { //处理单选题
      let isSelected = false;
      for (let answerItem of questItem.answers) {
        if (answerItem.selected) {
          //答案被选中
          isSelected = true;
          answerSelected.push(answerItem.index);
        }
      }
      if (!isSelected) {
        //如果一个都没选
        answerSelected.push('');
      }
    } else { //处理多选题
      let multiAnswer = [];
      for (let answerItem of questItem.answers) {
        if (answerItem.selected) {
          //答案被选中
          multiAnswer.push(answerItem.index);
        }
      }
      answerSelected.push(multiAnswer.join(''));
    }
    totalScope += questItem.correctAnswer == answerSelected[answerSelected.length - 1] ? questItem.scope : 0;
  }
  this.setData({
    totalScope:totalScope
  })
  console.log(answerSelected);
  console.log(totalScope);
  wx.cloud.database().collection('score').add({
    data:{
      score:totalScope
    }
  })
}

});
