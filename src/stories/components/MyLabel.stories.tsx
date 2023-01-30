import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/Label',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory< typeof MyLabel> = ( args ) => <MyLabel { ...args } />;

export const Basic = Template.bind({});
Basic.args = {
    label: 'Basic Label',
    size: "normal",
    allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    label: 'Text All Caps',
    allCaps: true
}
export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Text Secondary',
    color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Text Tertiary',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    label: 'Text With Custom Color',
    fontColor: '#1a5210'
}