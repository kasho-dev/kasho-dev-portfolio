import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import PortfolioSection from '../../src/components/PortfolioSection.vue'

// Mock project data for testing
const mockProjects = [
  {
    id: 1,
    title: 'Test Project',
    description: 'Test description',
    techStack: ['Vue.js', 'TypeScript'],
    images: ['test-image.jpg'],
    githubUrl: 'https://github.com/test',
    liveUrl: 'https://test.com'
  }
]

describe('PortfolioSection', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PortfolioSection, {
      props: {
        projects: mockProjects
      }
    })
  })

  it('renders correctly with project data', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.project-card').exists()).toBe(true)
  })

  it('displays project title correctly', () => {
    const projectTitle = wrapper.find('.project-title')
    expect(projectTitle.text()).toContain('Test Project')
  })

  it('displays project tech stack', () => {
    const techStack = wrapper.find('.tech-stack')
    expect(techStack.text()).toContain('Vue.js')
    expect(techStack.text()).toContain('TypeScript')
  })

  it('handles project click events', async () => {
    const projectCard = wrapper.find('.project-card')
    await projectCard.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('project-click')
  })

  it('shows typing animation', async () => {
    const typingElement = wrapper.find('[data-testid="typing-text"]')
    expect(typingElement.exists()).toBe(true)
    expect(typingElement.text()).toContain('Web Developer')
  })

  it('handles project overlay state', async () => {
    const overlay = wrapper.find('.project-overlay')
    expect(overlay.exists()).toBe(false)

    await wrapper.setData({ isOverlayOpen: true })
    expect(overlay.exists()).toBe(true)

    await wrapper.setData({ isOverlayOpen: false })
    expect(overlay.exists()).toBe(false)
  })

  it('scrolls to sections correctly', async () => {
    const aboutSection = wrapper.find('#about')
    await aboutSection.trigger('click')
    expect(window.scrollY).toBeGreaterThan(0)
  })
})
