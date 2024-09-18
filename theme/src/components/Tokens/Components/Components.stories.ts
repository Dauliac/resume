import { Meta, StoryObj } from '@storybook/vue3';
import Important1Component from './Important1.vue';
import Important2Component from './Important2.vue';
import Important3Component from './Important3.vue';
import LinkComponent from './Link.vue';
import SubtitleComponent from './Subtitle.vue';
import TextComponent from './Text.vue';
import TitleComponent from './Title.vue';
import DateComponent from './Date.vue';
import DateIntervalComponent from './DateInterval.vue';

const meta: Meta = {
  title: 'Design Tokens/Components',
};

export default meta;

export const Important1: StoryObj<typeof Important1Component> = {
  render: () => ({
    components: { Important1Component },
    template: '<Important1Component>Important 1 Text</Important1Component>',
  }),
};

export const Important2: StoryObj<typeof Important2Component> = {
  render: () => ({
    components: { Important2Component },
    template: '<Important2Component>Important 2 Text</Important2Component>',
  }),
};

export const Important3: StoryObj<typeof Important3Component> = {
  render: () => ({
    components: { Important3Component },
    template: '<Important3Component>Important 3 Text</Important3Component>',
  }),
};

export const Link: StoryObj<typeof LinkComponent> = {
  render: () => ({
    components: { LinkComponent },
    template: '<LinkComponent href="https://example.com">Example Link</LinkComponent>',
  }),
};

export const Subtitle: StoryObj<typeof SubtitleComponent> = {
  render: () => ({
    components: { SubtitleComponent },
    template: '<SubtitleComponent>Subtitle Text</SubtitleComponent>',
  }),
};

export const Text: StoryObj<typeof TextComponent> = {
  render: () => ({
    components: { TextComponent },
    template: '<TextComponent>Text Content</TextComponent>',
  }),
};

export const Title: StoryObj<typeof TitleComponent> = {
  render: () => ({
    components: { TitleComponent },
    template: '<TitleComponent>Title Text</TitleComponent>',
  }),
};

export const Date: StoryObj<typeof TitleComponent> = {
  render: () => ({
    components: { DateComponent },
    template: '<Date :date="2021-01-01"/>',
  }),
};

export const DateInterval: StoryObj<typeof TitleComponent> = {
  render: () => ({
    components: { DateIntervalComponent },
    template: '<DateInterval :startDate=""2021-01-01" :endDate="2021-02-02"/>',
  }),
};
