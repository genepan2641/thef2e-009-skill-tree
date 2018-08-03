<template>
    <div class="skill-set__item"
        :class="{
            'skill-set__item--is-disabled': disabled,
            'skill-set__item--is-selected': isSelected(),
            'skill-set__item--is-done-require': isPartialDone(),
            'skill-set__item--is-all-done': isAllDone(),
        }">
        <div class="skill-set__icon-wrapper" @click="clickOnItem">
            <i class="material-icons">{{ icon }}</i>
        </div>
        <div class="skill-set__number text-center">
            <i class="material-icons ">settings</i>
            <span class="">{{doneRequire}}/{{totalRequire}}</span>
        </div>
        <div class="skill-set__number text-center">
            <i class="material-icons ">filter_tilt_shift</i>
            <span class="">{{doneOptional}}/{{totalOptional}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        disabled: {type: Boolean},
        skill: {type: Object},
        currentSkill: {type: Object},
        icon: {type: String},
        requireStatus: {type: Object, default: () => ({})},
        optionalStatus: {type: Object, default: () => ({})}
    },
    computed: {
        totalRequire() {
            return Object.keys(this.skill.require).length;
        },
        doneRequire() {
            return Object.values(this.skill.require).filter(ele => ele.done == true).length;
        },
        totalOptional() {
            return Object.keys(this.skill.optional).length;
        },
        doneOptional() {
            return Object.values(this.skill.optional).filter(ele => ele.done == true).length;
        },
    },
    methods: {
        clickOnItem() {
            if(!this.disabled) {
                this.$emit('click-on-item', this.skill);
            }
        },
        isSelected() {
            return this.skill.title == this.currentSkill.title;
        },
        isPartialDone() {
            return Object.values(this.skill.require)
                .concat(Object.values(this.skill.optional))
                .some(ele => ele.done);
        },
        isAllDone() {
            return Object.values(this.skill.require)
                .concat(Object.values(this.skill.optional))
                .every(ele => ele.done);
        }
    }
}
</script>

<style>
</style>
