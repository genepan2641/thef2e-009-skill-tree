<template>
  <div id="app">
    <div class="app-wrapper gradient-bg">
      <div class="flex-box">
        <div class="title-col">
          <h1 class="app__title">FRONT-END SKILL TREE</h1>
          <rank :current-rank="currentRank"></rank>
        </div>

        <div class="tree-col">
          <!-- basic skill -->
          <div class="basic-skill skill-set flex-box">
            <div class="rank-wrapper">
                <img class="rank-img" src="static/img/img-planet-basics@2x.png" alt="">
                <div v-show="enableCss" class="rank-arrow rank-arrow--basic">
                  <div class="rank-triangle"></div>
                </div>
            </div>
            <div class="skill-set-wrapper">
                <div class="skill-set-row flex-box">
                    <skill-item 
                      v-for="(item, index) in basic"
                      :key="index"
                      @click-on-item="clickSkillItem"
                      :icon="item.icon" 
                      :disabled="false"
                      :skill="item"
                      :current-skill="currentSkill">
                    </skill-item>
                </div>
            </div>
          </div>

          <!-- css skill -->
          <div class="css-skill skill-set flex-box" :class="{'skill-set--disabled': !enableCss}">
            <div class="rank-wrapper ">
                <img class="rank-img" src="static/img/img-planet-css@2x.png" alt="">
                <div v-show="enableJs" class="rank-arrow rank-arrow--css">
                  <div class="rank-triangle"></div>
                </div>
            </div>
            <div class="skill-set-wrapper">
                <div class="skill-set-row flex-box">
                  <skill-item 
                      v-for="(item, index) in cssLine1"
                      :key="index"
                      @click-on-item="clickSkillItem"
                      :icon="item.icon" 
                      :disabled="!enableCss"
                      :skill="item"
                      :current-skill="currentSkill">
                    </skill-item>
                </div>
                <div class="skill-set-row flex-box">
                  <skill-item 
                      v-for="(item, index) in cssLine2"
                      :key="index"
                      @click-on-item="clickSkillItem"
                      :icon="item.icon" 
                      :disabled="!enableCss"
                      :skill="item"
                      :current-skill="currentSkill">
                    </skill-item>
                </div>
            </div>
          </div>

          <!-- js skill -->
          <div class="js-skill skill-set flex-box" :class="{'skill-set--disabled': !enableJs}">
            <div class="rank-wrapper">
                <img class="rank-img" src="static/img/img-planet-js@2x.png" alt="">
                <div v-show="enableManagers" class="rank-arrow rank-arrow--js">
                  <div class="rank-triangle"></div>
                </div>
            </div>
            <div class="skill-set-wrapper">
                <div class="skill-set-row flex-box">
                  <skill-item 
                      v-for="(item, index) in jsLine1"
                      :key="index"
                      @click-on-item="clickSkillItem"
                      :icon="item.icon" 
                      :disabled="!enableJs"
                      :skill="item"
                      :current-skill="currentSkill">
                    </skill-item>
                </div>
                <div class="skill-set-row flex-box">
                  <skill-item 
                      v-for="(item, index) in jsLine2"
                      :key="index"
                      @click-on-item="clickSkillItem"
                      :icon="item.icon" 
                      :disabled="!enableJs"
                      :skill="item"
                      :current-skill="currentSkill">
                    </skill-item>
                </div>
            </div>
          </div>

          <!-- managers skill -->
          <div class="managers-skill skill-set flex-box" :class="{'skill-set--disabled': !enableManagers}">
            <div class="rank-wrapper">
                <img class="rank-img" src="static/img/img-planet-managers@2x.png" alt="">
            </div>
            <div class="skill-set-wrapper">
                <div class="skill-set-row flex-box">
                  <skill-item 
                      v-for="(item, index) in managersLine"
                      :key="index"
                      @click-on-item="clickSkillItem"
                      :icon="item.icon" 
                      :disabled="!enableManagers"
                      :skill="item"
                      :current-skill="currentSkill">
                    </skill-item>
                </div>
            </div>
          </div>


        </div>

        <div class="detail-col" style="color: white;">
          <div v-if="!isEmpty(currentSkill)" class="skill-detail">
            <div class="skill-detail__up">
              <i class="material-icons">{{ currentSkill.icon }}</i>
              <h3 class="subtitle">{{ currentSkill.title }}</h3>
            </div>
            <div class="skill-detail__down">
              <div class="skill-detail__down-wrapper">
                <!-- require -->
                <div v-if="showDetailRequire">
                  <div class="w100 text-center">
                    <i class="material-icons">settings</i>
                    <p class="paragraph">RECOMMENDED</p>
                  </div>
                  <button 
                    class="skill-detail__skill-btn"
                    :class="{'skill-detail__skill-btn--is-selected': isSkillSelected(item)}"
                    v-for="(item, key ,index) in currentSkill.require"
                    :key="`${key}${index}`"
                    @click="toggleSkill(item, key, 'require')">{{item.title}}
                  </button>
                </div>

                <!-- optional -->
                <div v-if="showDetailOptional">
                  <div class="w100 text-center">
                    <i class="material-icons">filter_tilt_shift</i>
                    <p class="paragraph">OPTIONAL</p>
                  </div>
                  <button 
                    class="skill-detail__skill-btn"
                    :class="{'skill-detail__skill-btn--is-selected': isSkillSelected(item)}"
                    v-for="(item, key ,index) in currentSkill.optional"
                    :key="`${key}${index}`"
                    @click="toggleSkill(item, key, 'optional')">{{item.title}}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rank from './components/Rank.vue'
import SkillItem from './components/SkillItem.vue';
export default {
  name: 'App',
  data() {
    return {
      currentSkill: {},
      basicSkills: {
        title: 'BASIC SKILLS',
        icon: 'category',
        require: {
          html: {title: 'Learn HTML', done: false},
          css: {title: 'Basics of CSS', done: false},
          js: {title: 'Basics of Javascript', done: false}
        },
        optional: {}
      },
      basicTools: {
        title: 'BASIC TOOLS',
        icon: 'build',
        require: {
          git: {title: 'Git - Version Control', done: false},
          terminal: {title: 'Basic Terminal Usage', done: false},
          textEditor: {title: 'Text Editor', done: false},
          researching: {title: 'A Heart of Researching', done: false}
        },
        optional: {}
      },
      cssFrameWork: {
        title: 'CSS FRAMEWORK',
        icon: 'flip_to_front',
        require: {
          bootstrap: {title: 'Bootstrap', done: false}
        },
        optional: {
          uiKit: {title: 'UIKit', done: false},
          foundation: {title: 'Foundation', done: false},
          semanticUI: {title: 'Semantic UI', done: false}
        }
      },
      cssPreprocessors: {
        title: 'CSS PREPROCESSORS',
        icon: 'view_quilt',
        require: {
          sass: {title: 'Sass', done: false},
          postCss: {title: 'PostCss', done: false}
        },
        optional: {
          less: {title: 'Less', done: false},
          stylus: {title: 'Stylus', done: false}
        }
      },
      cssArch: {
        title: 'CSS ARCHITECHTURE',
        icon: 'developer_board',
        require: {
          oocss: {title: 'OOCSS', done: false}
        },
        optional: {
          smacss: {title: 'SMACCSS', done: false},
          bem: {title: 'BEM', done: false}
        }
      },
      cssSkill: {
        title: 'CSS SKILLS',
        icon: 'devices',
        require: {
          responsive: {title: 'Responsive', done: false},
          flexbox: {title: 'Flexbox', done: false}
        },
        optional: {}
      },
      cssMastery: {
        title: 'CSS MASTERY',
        icon: 'widgets',
        require: {},
        optional: {
          gridLayout: {title: 'Grid Layout', done: false},
          animation: {title: 'Animation', done: false},
          transform: {title: 'Transform 2D, 3D', done: false}
        }
      },
      // 以下是 js
      basicDom: {
        title: 'BASIC DOM',
        icon: 'hdr_strong',
        require: {},
        optional: {
          jQuery: {title: 'jQuery', done: false}
        }
      },
      webDrawing: {
        title: 'WEB DRAWING',
        icon: 'gradient',
        require: {},
        optional: {
          svg: {title: 'SVG', done: false},
          canvas: {title: 'Canvas', done: false},
          d3: {title: 'D3.js', done: false}
        }
      },
      jsSkill: {
        title: 'JAVASCRIPT SKILLS',
        icon: 'format_quote',
        require: {
          es6: {title: 'ES6', done: false}
        },
        optional: {}
      },
      jsFramework: {
        title: 'JAVASCRIPT FRAMEWORK',
        icon: 'developer_mode',
        require: {
          vue: {title: 'Vue.js', done: false},
          angular: {title: 'Angular', done: false},
          react: {title: 'React.js', done: false}
        },
        optional: {}
      },
      jsPreprocessors: {
        title: 'JAVASCRIPT PREPROCESSORS',
        icon: 'nfc',
        require: {},
        optional: {
          typeScript: {title: 'TypeScript', done: false},
          babel: {title: 'Babel', done: false},
          coffeeScript: {title: 'CoffeeScript', done: false}
        }
      },
      // 以下是 managers
      packageManagers: {
        title: 'PACKAGE MANAGERS',
        icon: 'device_hub',
        require: {
          npm: {title: 'NPM', done: false},
          yarn: {title: 'YARN', done: false}
        },
        optional: {
          bower: {title: 'Bower', done: false}
        }
      },
      taskRunner: {
        title: 'TASK RUNNER',
        icon: 'import_contacts',
        require: {
          npm: {title: 'npm scripts', done: false},
          gulp: {title: 'gulp', done: false}
        },
        optional: {
          grunt: {title: 'grunt', done: false}
        }
      },
      buildTools: {
        title: 'BUILD TOOLS',
        icon: 'table_chart',
        require: {
          webpack: {title: 'Webpack', done: false}
        },
        optional: {
          parcel: {title: 'Parcel', done: false}
        }
      }
    }
  },
  computed: {
    currentRank() {
      var arr = [this.enableCss, this.enableJs, this.enableManagers];
      var doneLength = arr.filter(ele => ele == true).length;
      var pair = {
        0: 'noob',
        1: 'beginner',
        2: 'developer',
        3: 'master'
      }
      return pair[doneLength];
    },
    enableCss() {
      return Object.values(this.basicSkills.require)
        .concat(Object.values(this.basicTools.require))
        .every(ele => ele.done == true);
    },
    enableJs() {
      return Object.values(this.cssFrameWork.require)
        .concat(Object.values(this.cssPreprocessors.require))
        .concat(Object.values(this.cssArch.require))
        .concat(Object.values(this.cssSkill.require))
        .concat(Object.values(this.cssMastery.require))
        .every(ele => ele.done == true);
    },
    enableManagers() {
      return Object.values(this.basicDom.require)
        .concat(Object.values(this.webDrawing.require))
        .concat(Object.values(this.jsSkill.require))
        .concat(Object.values(this.jsFramework.require))
        .concat(Object.values(this.jsPreprocessors.require))
        .every(ele => ele.done == true);
    },
    basic() {
      return [this.basicSkills, this.basicTools]
    },
    cssLine1() {
      return [this.cssFrameWork, this.cssPreprocessors, this.cssArch]
    },
    cssLine2() {
      return [this.cssSkill, this.cssMastery]
    },
    jsLine1() {
      return [this.basicDom, this.webDrawing]
    },
    jsLine2() {
      return [this.jsSkill, this.jsFramework, this.jsPreprocessors]
    },
    managersLine() {
      return [this.packageManagers, this.taskRunner, this.buildTools]
    },
    showDetailRequire() {
      return !this.isEmpty(this.currentSkill.require);
    },
    showDetailOptional() {
      return !this.isEmpty(this.currentSkill.optional);
    },
  },
  methods: {
    clickSkillItem(val) {
      this.currentSkill = val;
    },
    toggleSkill(item, key, type) {
      // console.log(item, key)
      this.currentSkill[type][key].done = !this.currentSkill[type][key].done;
    },
    isEmpty(val) {
      return Object.keys(val).length == 0;
    },
    isSkillSelected(item) {
      return item.done;
    }
  },
  components: {
    Rank,
    SkillItem
  }
}
</script>

<style src="./assets/styles/main.scss" lang="scss">
</style>
