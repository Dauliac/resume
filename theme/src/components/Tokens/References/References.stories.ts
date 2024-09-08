import type { Meta, StoryObj } from '@storybook/vue3';
import ColorsComponent from './Colors.vue';
import TypographyComponent from './Typography.vue';

const meta: Meta = {
  title: 'Design Tokens/References',
};

export default meta;

export const Colors: StoryObj<typeof ColorsComponent> = {
  render: () => ({
    components: { ColorsComponent },
    template: '<ColorsComponent />',
  }),
};

export const Typography: StoryObj<typeof TypographyComponent> = {
  render: () => ({
    components: { TypographyComponent },
    template: '<TypographyComponent />',
  }),
};
