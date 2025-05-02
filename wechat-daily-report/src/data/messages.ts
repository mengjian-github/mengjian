import { ChatMessage, DailyDigest } from '../types';

interface GroupData {
  name: string;
  messages: Record<string, {
    messages: ChatMessage[];
    digest: DailyDigest;
  }>;
}

export const groupMessages: Record<string, GroupData> = {
  'group1': {
    name: '发家致富，指日可待',
    messages: {
      '2025-04-30': {
        messages: [
          {
            id: '1',
            content: '上岛',
            sender: '姚路行',
            timestamp: '07:34',
            type: 'text',
            category: '日常交流'
          },
          {
            id: '2',
            content: '你起这么早啊 特种兵啊',
            sender: '李骁',
            timestamp: '09:38',
            type: 'text',
            category: '日常交流'
          },
          {
            id: '3',
            content: '日本有1个小时时差，比国内早一个小时',
            sender: '姚路行',
            timestamp: '09:39',
            type: 'text',
            category: '日常交流'
          },
          {
            id: '4',
            content: '回家！',
            sender: '张筱',
            timestamp: '10:13',
            type: 'text',
            category: '日常交流'
          },
          {
            id: '5',
            content: '[链接|红温了！Cursor又乱写代码？1分钟装上Context7 MCP享受实时文档检索服务]',
            sender: '孟健',
            timestamp: '11:05',
            type: 'link',
            category: '资源分享',
            tags: ['技术分享', 'Cursor', 'MCP']
          },
          {
            id: '6',
            content: '@姚路行 想做得就是这个东西',
            sender: '孟健',
            timestamp: '11:05',
            type: 'text',
            category: '技术讨论'
          },
          {
            id: '7',
            content: '挺牛逼\n我们做个内网版的，比如gulux，bytefass之类的文档',
            sender: '姚路行',
            timestamp: '11:24',
            type: 'text',
            category: '技术讨论',
            tags: ['项目讨论']
          },
          {
            id: '8',
            content: '昨天晚上本来想写一篇爆文的，没写完，今天写完肯定爆[旺柴]',
            sender: '姚路行',
            timestamp: '11:35',
            type: 'text',
            category: '职业发展'
          },
          {
            id: '9',
            content: '终于要到五一了，这几天累死个人',
            sender: '孟健',
            timestamp: '11:44',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '10',
            content: '上海有啥好玩好吃的\n推荐推荐\n五一我和爸妈去玩\n除了外滩',
            sender: '李骁',
            timestamp: '11:51',
            type: 'text',
            category: '生活话题',
            tags: ['旅游', '上海']
          },
          {
            id: '11',
            content: '全在郊外\n市区里面没啥玩的\n你们还不如安排几天去苏杭玩一玩',
            sender: '孟健',
            timestamp: '11:52',
            type: 'text',
            category: '生活话题',
            tags: ['旅游建议']
          },
          {
            id: '12',
            content: '我刚盘算了一下，照正常的发展，明年也还不完房贷\n如果副业+主业的收入，支撑我还完了房贷，就是我可以离职的时候了',
            sender: '孟健',
            timestamp: '13:18',
            type: 'text',
            category: '职业发展',
            tags: ['职业规划']
          },
          {
            id: '13',
            content: '我27年合同到期，得盘算一下26年能不能副业爆发',
            sender: '孟健',
            timestamp: '14:05',
            type: 'text',
            category: '职业发展',
            tags: ['职业规划']
          },
          {
            id: '14',
            content: '我们这30岁，合同到期的，大概率不给续，除非绩效优秀',
            sender: '李骁',
            timestamp: '14:07',
            type: 'text',
            category: '职业发展'
          },
          {
            id: '15',
            content: '你想的太简单了，那种环境下，你会被同化的\n就跟学生放假一样，放假前列好了各种学习计划，一个假期基本啥也执行不了',
            sender: '孟健',
            timestamp: '14:13',
            type: 'text',
            category: '职业发展',
            tags: ['经验分享']
          }
        ],
        digest: {
          id: 'digest-2025-04-30',
          chatGroupId: 'group1',
          chatGroupName: '发家致富，指日可待',
          date: '2025-04-30',
          topicHighlights: [
            {
              title: '职业发展与副业规划讨论',
              summary: '讨论了30岁合同到期的职业发展问题。孟健提到需要在27年合同到期前通过副业发展获得更多收入以还清房贷，为离职做准备。李骁分享了公司对30岁员工的续约政策，表示除非绩效优秀否则大概率不会续约。孟健进一步指出环境对个人发展的影响，强调了执行力和自我约束的重要性，并用假期计划执行难的例子说明了环境影响。',
              relatedMessages: [
                {
                  id: '12',
                  content: '我刚盘算了一下，照正常的发展，明年也还不完房贷\n如果副业+主业的收入，支撑我还完了房贷，就是我可以离职的时候了',
                  sender: '孟健',
                  timestamp: '13:18',
                  type: 'text',
                  category: '职业发展',
                  tags: ['职业规划']
                },
                {
                  id: '13',
                  content: '我27年合同到期，得盘算一下26年能不能副业爆发',
                  sender: '孟健',
                  timestamp: '14:05',
                  type: 'text',
                  category: '职业发展',
                  tags: ['职业规划']
                },
                {
                  id: '14',
                  content: '我们这30岁，合同到期的，大概率不给续，除非绩效优秀',
                  sender: '李骁',
                  timestamp: '14:07',
                  type: 'text',
                  category: '职业发展'
                },
                {
                  id: '15',
                  content: '你想的太简单了，那种环境下，你会被同化的\n就跟学生放假一样，放假前列好了各种学习计划，一个假期基本啥也执行不了',
                  sender: '孟健',
                  timestamp: '14:13',
                  type: 'text',
                  category: '职业发展',
                  tags: ['经验分享']
                }
              ],
              participants: ['孟健', '李骁'],
              timeRange: '13:18 - 14:13',
              category: '职业发展',
              significance: '重要'
            },
            {
              title: '上海旅游攻略讨论',
              summary: '李骁计划五一带父母去上海旅游，寻求除外滩外的景点和美食推荐。孟健建议把重心放在郊区游玩，认为市区景点较少，并特别推荐考虑把行程扩展到苏杭，暗示那里可能有更好的旅游体验。这个建议体现了对短假期旅游行程规划的实用思考。',
              relatedMessages: [
                {
                  id: '10',
                  content: '上海有啥好玩好吃的\n推荐推荐\n五一我和爸妈去玩\n除了外滩',
                  sender: '李骁',
                  timestamp: '11:51',
                  type: 'text',
                  category: '生活话题',
                  tags: ['旅游', '上海']
                },
                {
                  id: '11',
                  content: '全在郊外\n市区里面没啥玩的\n你们还不如安排几天去苏杭玩一玩',
                  sender: '孟健',
                  timestamp: '11:52',
                  type: 'text',
                  category: '生活话题',
                  tags: ['旅游建议']
                }
              ],
              participants: ['李骁', '孟健'],
              timeRange: '11:51 - 11:52',
              category: '生活话题',
              significance: '有趣'
            },
            {
              title: 'MCP文档检索服务项目构想',
              summary: '孟健分享了一个关于Cursor集成Context7 MCP实现实时文档检索的项目。姚路行对此表示认可，并提出了一个重要的业务方向：开发面向内部文档（如gulux、bytefass）的检索服务。这个想法既解决了内部文档检索的需求，又能够借鉴现有成熟产品的实现思路。项目具有明确的应用场景和技术可行性。',
              relatedMessages: [
                {
                  id: '5',
                  content: '[链接|红温了！Cursor又乱写代码？1分钟装上Context7 MCP享受实时文档检索服务]',
                  sender: '孟健',
                  timestamp: '11:05',
                  type: 'link',
                  category: '资源分享',
                  tags: ['技术分享', 'Cursor', 'MCP']
                },
                {
                  id: '6',
                  content: '@姚路行 想做得就是这个东西',
                  sender: '孟健',
                  timestamp: '11:05',
                  type: 'text',
                  category: '技术讨论'
                },
                {
                  id: '7',
                  content: '挺牛逼\n我们做个内网版的，比如gulux，bytefass之类的文档',
                  sender: '姚路行',
                  timestamp: '11:24',
                  type: 'text',
                  category: '技术讨论',
                  tags: ['项目讨论']
                }
              ],
              participants: ['孟健', '姚路行'],
              timeRange: '11:05 - 11:24',
              category: '技术讨论',
              significance: '重要'
            }
          ],
          activityStats: {
            totalMessages: 15,
            activeUsers: ['姚路行', '李骁', '张筱', '孟健'],
            peakTimeRange: '11:00 - 12:00',
            messageDistribution: {
              morning: 8,
              afternoon: 7,
              evening: 0,
              night: 0
            }
          },
          quotableMessages: [
            {
              content: '你想的太简单了，那种环境下，你会被同化的\n就跟学生放假一样，放假前列好了各种学习计划，一个假期基本啥也执行不了',
              sender: '孟健',
              timestamp: '14:13'
            }
          ],
          followUps: [
            {
              item: '讨论内网版文档检索服务的具体实现方案',
              assignee: '姚路行',
              priority: '中'
            }
          ]
        }
      },
      '2025-05-01': {
        messages: [
          {
            id: '1',
            content: '![图片](http:///image/d706f1b0f6542c7256b0954ea844abbf)',
            sender: '李骁',
            timestamp: '18:28',
            type: 'image',
            category: '生活话题'
          },
          {
            id: '2',
            content: '人红就是被蹭',
            sender: '张筱',
            timestamp: '18:31',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '3',
            content: '[链接|我一人创业 5 年多了！和打工完全不一样](http://mp.weixin.qq.com/s?__biz=MzA3MDU2MjM4Ng==&mid=2247499462&idx=1&sn=5393a61fc4335881f754c31f1aac52d7&chksm=9e4cc5487d962b46c45db1de707fe89ff56bff19a4949d7f60c0aa3ecfd2871c56254d0fc088&mpshare=1&scene=1&srcid=0501C7TsyPAupjtKs9qGvo3x&sharer_shareinfo=baead51e3211f61ac93cff600e1954b2&sharer_shareinfo_first=baead51e3211f61ac93cff600e1954b2#rd)',
            sender: '孟健',
            timestamp: '20:33',
            type: 'link',
            category: '资源分享'
          },
          {
            id: '4',
            content: '![图片](http:///image/a21f066c1cf536042c2c17735cd5250c)',
            sender: '孟健',
            timestamp: '21:00',
            type: 'image',
            category: '生活话题'
          },
          {
            id: '5',
            content: '房子找好了',
            sender: '李骁',
            timestamp: '21:03',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '6',
            content: '上浦名邸',
            sender: '李骁',
            timestamp: '21:03',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '7',
            content: '3000，独卫',
            sender: '李骁',
            timestamp: '21:03',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '8',
            content: '[语音消息]',
            sender: '李骁',
            timestamp: '21:04',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '9',
            content: '[动画表情]',
            sender: '李骁',
            timestamp: '21:04',
            type: 'emoji',
            category: '生活话题'
          },
          {
            id: '10',
            content: '这里的房子你都能租到？',
            sender: '孟健',
            timestamp: '21:08',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '11',
            content: '尚浦名邸应该是公司最近的了',
            sender: '孟健',
            timestamp: '21:08',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '12',
            content: '嗯',
            sender: '李骁',
            timestamp: '22:07',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '13',
            content: '人脉',
            sender: '李骁',
            timestamp: '22:07',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '14',
            content: '搬过来和我住不',
            sender: '李骁',
            timestamp: '22:15',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '15',
            content: '我这还有俩独卫，空的',
            sender: '李骁',
            timestamp: '22:15',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '16',
            content: '[动画表情]',
            sender: '李骁',
            timestamp: '22:15',
            type: 'emoji',
            category: '生活话题'
          },
          {
            id: '17',
            content: '高档小区 200平 现在就我一个人住',
            sender: '李骁',
            timestamp: '22:38',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '18',
            content: '你俩有想法可以来找我',
            sender: '李骁',
            timestamp: '22:38',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '19',
            content: '确实蛮近的',
            sender: '张筱',
            timestamp: '22:51',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '20',
            content: '拍拍照看看',
            sender: '张筱',
            timestamp: '22:51',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '21',
            content: '到时候去你家参观',
            sender: '张筱',
            timestamp: '22:51',
            type: 'text',
            category: '生活话题'
          }
        ],
        digest: {
          id: 'digest-2025-05-01',
          chatGroupId: 'group1',
          chatGroupName: '发家致富，指日可待',
          date: '2025-05-01',
          topicHighlights: [
            {
              title: '租房与生活分享',
              summary: '群成员围绕租房、生活展开热烈讨论。李骁分享了自己找到的高档小区房源，邀请大家合租，并介绍了房子的地理位置、价格和配套。孟健、张筱等人积极互动，讨论了租房便利性、距离公司远近等实际问题。期间还穿插了图片、表情和资源分享，气氛轻松活跃。',
              relatedMessages: [
                { id: '5', content: '房子找好了', sender: '李骁', timestamp: '21:03', type: 'text', category: '生活话题' },
                { id: '6', content: '上浦名邸', sender: '李骁', timestamp: '21:03', type: 'text', category: '生活话题' },
                { id: '7', content: '3000，独卫', sender: '李骁', timestamp: '21:03', type: 'text', category: '生活话题' },
                { id: '10', content: '这里的房子你都能租到？', sender: '孟健', timestamp: '21:08', type: 'text', category: '生活话题' },
                { id: '11', content: '尚浦名邸应该是公司最近的了', sender: '孟健', timestamp: '21:08', type: 'text', category: '生活话题' },
                { id: '17', content: '高档小区 200平 现在就我一个人住', sender: '李骁', timestamp: '22:38', type: 'text', category: '生活话题' },
                { id: '18', content: '你俩有想法可以来找我', sender: '李骁', timestamp: '22:38', type: 'text', category: '生活话题' }
              ],
              participants: ['李骁', '孟健', '张筱'],
              timeRange: '21:03 - 22:51',
              category: '生活话题',
              significance: '有趣'
            },
            {
              title: '资源与生活趣事分享',
              summary: '群内成员分享了创业相关的文章和生活趣事，气氛轻松。',
              relatedMessages: [
                { id: '2', content: '人红就是被蹭', sender: '张筱', timestamp: '18:31', type: 'text', category: '生活话题' },
                { id: '3', content: '[链接|我一人创业 5 年多了！和打工完全不一样](http://mp.weixin.qq.com/s?__biz=MzA3MDU2MjM4Ng==&mid=2247499462&idx=1&sn=5393a61fc4335881f754c31f1aac52d7&chksm=9e4cc5487d962b46c45db1de707fe89ff56bff19a4949d7f60c0aa3ecfd2871c56254d0fc088&mpshare=1&scene=1&srcid=0501C7TsyPAupjtKs9qGvo3x&sharer_shareinfo=baead51e3211f61ac93cff600e1954b2&sharer_shareinfo_first=baead51e3211f61ac93cff600e1954b2#rd)', sender: '孟健', timestamp: '20:33', type: 'link', category: '资源分享' }
              ],
              participants: ['张筱', '孟健'],
              timeRange: '18:31 - 20:33',
              category: '生活话题',
              significance: '有趣'
            }
          ],
          activityStats: {
            totalMessages: 21,
            activeUsers: ['李骁', '孟健', '张筱'],
            peakTimeRange: '21:00 - 22:00',
            messageDistribution: {
              morning: 0,
              afternoon: 2,
              evening: 10,
              night: 9
            }
          },
          quotableMessages: [
            {
              content: '高档小区 200平 现在就我一个人住',
              sender: '李骁',
              timestamp: '22:38'
            }
          ],
          followUps: [
            {
              item: '后续可关注群成员租房进展及合租体验',
              assignee: '全体成员',
              priority: '低'
            }
          ]
        }
      },
      '2025-05-02': {
        messages: [
          {
            id: '1',
            content: '[链接|爆粉AI有声绘本=豆包+即梦+剪映+10分钟（每条涨粉10w+，附保姆级教程）](http://mp.weixin.qq.com/s?__biz=Mzk1Nzc3MTU5MA==&mid=2247484327&idx=1&sn=7e37a3dccd86f62677e29005406175f0&chksm=c2b594283a5f42142e7c6d6fa970f8b7dad536620eec8075c2358c0bd097410bb195fec967e7&mpshare=1&scene=1&srcid=0502hDDVOuFzauftc3PxX9ol&sharer_shareinfo=c652fa3794d24b65b6ec9ff196aa5a9a&sharer_shareinfo_first=c652fa3794d24b65b6ec9ff196aa5a9a#rd)',
            sender: '姚路行',
            timestamp: '11:04',
            type: 'link',
            category: '资源分享',
            tags: ['涨粉', 'AI', '教程']
          },
          {
            id: '2',
            content: '@姚路行 你要在群里答疑啊，别老是搞流量[旺柴]',
            sender: '孟健',
            timestamp: '11:56',
            type: 'text',
            category: '日常交流'
          },
          {
            id: '3',
            content: '这个月很关键，构建信任才能转化',
            sender: '孟健',
            timestamp: '11:57',
            type: 'text',
            category: '职业发展'
          },
          {
            id: '4',
            content: '[链接|你好，我是升级版的豆包](http://mp.weixin.qq.com/s?__biz=MzI4MTM5MTgyMg==&mid=2247484292&idx=1&sn=f26f3270d09fa8c2fed6f176cb68f7c9&chksm=ea95d21854959a99bc31ed7bac238d4e2f8facd0ffe2acffb77da210532b8cdc0c7aa341d6d8&mpshare=1&scene=1&srcid=0502YMLAVzFCotOnQPNVz1SI&sharer_shareinfo=5c40b6175d8d7e991891511db0c3a1dc&sharer_shareinfo_first=5c40b6175d8d7e991891511db0c3a1dc#rd)',
            sender: '孟健',
            timestamp: '12:01',
            type: 'link',
            category: '资源分享',
            tags: ['AI', '豆包']
          },
          {
            id: '5',
            content: '搞呀，也刚才在单独答疑',
            sender: '姚路行',
            timestamp: '12:02',
            type: 'text',
            category: '日常交流'
          },
          {
            id: '6',
            content: '我觉得写豆包这样写就行，这个标题我是有点击欲望的',
            sender: '孟健',
            timestamp: '12:02',
            type: 'text',
            category: '资源分享'
          },
          {
            id: '7',
            content: '![图片](http:///image/9e779592977abaac8f965547c2a1c6fc)',
            sender: '孟健',
            timestamp: '12:42',
            type: 'image',
            category: '生活话题'
          },
          {
            id: '8',
            content: '什么叫卷。。。',
            sender: '孟健',
            timestamp: '12:42',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '9',
            content: '别人赚到千万了，还比你努力[捂脸]这世界还是很可怕的',
            sender: '孟健',
            timestamp: '12:44',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '10',
            content: '上午刚把房子签完',
            sender: '李骁',
            timestamp: '13:32',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '11',
            content: '下午去外滩',
            sender: '李骁',
            timestamp: '13:32',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '12',
            content: '照片呢',
            sender: '张筱',
            timestamp: '13:38',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '13',
            content: '@李骁 ',
            sender: '张筱',
            timestamp: '13:38',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '14',
            content: '啊。',
            sender: '李骁',
            timestamp: '13:39',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '15',
            content: '回头用4',
            sender: '李骁',
            timestamp: '13:39',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '16',
            content: 'o p几个',
            sender: '李骁',
            timestamp: '13:39',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '17',
            content: '我那个房子找的真挺好的',
            sender: '李骁',
            timestamp: '13:40',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '18',
            content: '2200万',
            sender: '李骁',
            timestamp: '13:40',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '19',
            content: '我3800一个月租',
            sender: '李骁',
            timestamp: '13:40',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '20',
            content: '你俩真的可以考虑',
            sender: '李骁',
            timestamp: '13:40',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '21',
            content: '主要是近',
            sender: '李骁',
            timestamp: '13:41',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '22',
            content: '离公司3分钟',
            sender: '李骁',
            timestamp: '13:41',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '23',
            content: '咱仨把这房子包了',
            sender: '李骁',
            timestamp: '13:41',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '24',
            content: '4个独卫',
            sender: '李骁',
            timestamp: '13:41',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '25',
            content: '还有天台',
            sender: '李骁',
            timestamp: '13:42',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '26',
            content: '现在我一个人住',
            sender: '李骁',
            timestamp: '13:42',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '27',
            content: '爽飞了',
            sender: '李骁',
            timestamp: '13:42',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '28',
            content: '你现在是合租但是只有一个人住是吧',
            sender: '张筱',
            timestamp: '13:55',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '29',
            content: '四房？',
            sender: '张筱',
            timestamp: '13:56',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '30',
            content: '五房',
            sender: '李骁',
            timestamp: '14:01',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '31',
            content: '野食',
            sender: '李骁',
            timestamp: '14:01',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '32',
            content: '150平',
            sender: '李骁',
            timestamp: '14:02',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '33',
            content: '5房但是有4个卫生间？',
            sender: '张筱',
            timestamp: '14:04',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '34',
            content: '大平层吗',
            sender: '孟健',
            timestamp: '14:04',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '35',
            content: '![图片](http:///image/4e45e3116efcf29f7ef8032822a17917)',
            sender: '姚路行',
            timestamp: '15:01',
            type: 'image',
            category: '生活话题'
          },
          {
            id: '36',
            content: '![图片](http:///image/7042cf7c36d3d9a535e106dcdf03c81d)',
            sender: '李骁',
            timestamp: '17:24',
            type: 'image',
            category: '生活话题'
          },
          {
            id: '37',
            content: '一顿饭5000没了',
            sender: '李骁',
            timestamp: '17:25',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '38',
            content: '[动画表情]',
            sender: '李骁',
            timestamp: '17:25',
            type: 'emoji',
            category: '生活话题'
          },
          {
            id: '39',
            content: '嗯',
            sender: '李骁',
            timestamp: '17:25',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '40',
            content: '吃这么高档。。、',
            sender: '我',
            timestamp: '17:26',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '41',
            content: '我跟爸妈一顿饭不会超过500...',
            sender: '我',
            timestamp: '17:27',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '42',
            content: '一样',
            sender: '姚路行',
            timestamp: '17:27',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '43',
            content: '[语音消息]',
            sender: '李骁',
            timestamp: '17:47',
            type: 'text',
            category: '生活话题'
          },
          {
            id: '44',
            content: '![图片](http:///image/9b71d09905779b34307c3f5420d4a11d)',
            sender: '我',
            timestamp: '18:33',
            type: 'image',
            category: '生活话题'
          },
          {
            id: '45',
            content: '[旺柴]',
            sender: '李骁',
            timestamp: '18:35',
            type: 'emoji',
            category: '生活话题'
          }
        ],
        digest: {
          id: 'digest-2025-05-02',
          chatGroupId: 'group1',
          chatGroupName: '发家致富，指日可待',
          date: '2025-05-02',
          topicHighlights: [
            {
              title: '房产与租房生活热议',
              summary: '李骁当天分享了自己刚签下的新房，2200万的总价、3800元的月租、距离公司仅3分钟、五房四卫带天台的配置，引发大家热烈讨论。张筱关心合租实际情况，孟健则好奇是否为大平层。李骁表示目前独自居住，邀请群友一起合租，气氛轻松，大家对理想居住环境和租房体验各抒己见。',
              relatedMessages: [
                { id: '10', content: '上午刚把房子签完', sender: '李骁', timestamp: '13:32', type: 'text', category: '生活话题' },
                { id: '17', content: '我那个房子找的真挺好的', sender: '李骁', timestamp: '13:40', type: 'text', category: '生活话题' },
                { id: '18', content: '2200万', sender: '李骁', timestamp: '13:40', type: 'text', category: '生活话题' },
                { id: '19', content: '我3800一个月租', sender: '李骁', timestamp: '13:40', type: 'text', category: '生活话题' },
                { id: '23', content: '咱仨把这房子包了', sender: '李骁', timestamp: '13:41', type: 'text', category: '生活话题' }
              ],
              participants: ['李骁', '张筱', '孟健', '姚路行', '我'],
              timeRange: '13:32 - 14:04',
              category: '生活话题',
              significance: '有趣'
            },
            {
              title: '资源与涨粉技巧分享',
              summary: '姚路行分享了AI有声绘本涨粉教程，孟健则提醒要在群内多做答疑、构建信任，强调内容转化的重要性。两人还交流了豆包升级版的内容运营思路，讨论如何通过标题吸引点击。大家对流量、涨粉、内容创作等副业话题表现出浓厚兴趣，并分享了各自的实操经验。',
              relatedMessages: [
                { id: '1', content: '[链接|爆粉AI有声绘本=豆包+即梦+剪映+10分钟（每条涨粉10w+，附保姆级教程）](http://mp.weixin.qq.com/s?__biz=Mzk1Nzc3MTU5MA==&mid=2247484327&idx=1&sn=7e37a3dccd86f62677e29005406175f0&chksm=c2b594283a5f42142e7c6d6fa970f8b7dad536620eec8075c2358c0bd097410bb195fec967e7&mpshare=1&scene=1&srcid=0502hDDVOuFzauftc3PxX9ol&sharer_shareinfo=c652fa3794d24b65b6ec9ff196aa5a9a&sharer_shareinfo_first=c652fa3794d24b65b6ec9ff196aa5a9a#rd)', sender: '姚路行', timestamp: '11:04', type: 'link', category: '资源分享' },
                { id: '4', content: '[链接|你好，我是升级版的豆包](http://mp.weixin.qq.com/s?__biz=MzI4MTM5MTgyMg==&mid=2247484292&idx=1&sn=f26f3270d09fa8c2fed6f176cb68f7c9&chksm=ea95d21854959a99bc31ed7bac238d4e2f8facd0ffe2acffb77da210532b8cdc0c7aa341d6d8&mpshare=1&scene=1&srcid=0502YMLAVzFCotOnQPNVz1SI&sharer_shareinfo=5c40b6175d8d7e991891511db0c3a1dc&sharer_shareinfo_first=5c40b6175d8d7e991891511db0c3a1dc#rd)', sender: '孟健', timestamp: '12:01', type: 'link', category: '资源分享' }
              ],
              participants: ['姚路行', '孟健'],
              timeRange: '11:04 - 12:01',
              category: '资源分享',
              significance: '信息量大'
            },
            {
              title: '生活趣事与消费观',
              summary: '李骁晒出高档餐饮消费"一顿饭5000没了"，引发群友调侃和共鸣。有人表示自己和父母吃饭从未超过500元，姚路行也表示认同。大家在轻松氛围中交流各自的消费观念和生活趣事，展现了不同家庭背景下的真实生活状态。',
              relatedMessages: [
                { id: '37', content: '一顿饭5000没了', sender: '李骁', timestamp: '17:25', type: 'text', category: '生活话题' },
                { id: '41', content: '我跟爸妈一顿饭不会超过500...', sender: '我', timestamp: '17:27', type: 'text', category: '生活话题' },
                { id: '42', content: '一样', sender: '姚路行', timestamp: '17:27', type: 'text', category: '生活话题' }
              ],
              participants: ['李骁', '我', '姚路行'],
              timeRange: '17:25 - 17:27',
              category: '生活话题',
              significance: '有趣'
            }
          ],
          activityStats: {
            totalMessages: 45,
            activeUsers: ['姚路行', '孟健', '李骁', '张筱', '我'],
            peakTimeRange: '13:30 - 14:10',
            messageDistribution: {
              morning: 1,
              afternoon: 30,
              evening: 10,
              night: 4
            }
          },
          quotableMessages: [
            {
              content: '别人赚到千万了，还比你努力[捂脸]这世界还是很可怕的',
              sender: '孟健',
              timestamp: '12:44'
            },
            {
              content: '一顿饭5000没了',
              sender: '李骁',
              timestamp: '17:25'
            }
          ],
          followUps: [
            {
              item: '后续可关注群成员租房体验及合租进展',
              assignee: '全体成员',
              priority: '中'
            }
          ]
        }
      }
    }
  }
}; 