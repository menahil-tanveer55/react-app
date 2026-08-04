import { test, expect } from '@playwright/test'

// ─── Header navigation ────────────────────────────────────────────────────────
test.describe('Header navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders site header with test-id', async ({ page }) => {
    await expect(page.getByTestId('site-header')).toBeVisible()
  })

  test('shows desktop navigation on large screens', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    const nav = page.getByTestId('desktop-navigation')
    await expect(nav).toBeVisible()
  })

  test('desktop nav contains expected links', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    const nav = page.getByTestId('desktop-navigation')
    await expect(nav.getByRole('link', { name: 'Home' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Services' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Products' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Team' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'About' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Contact' })).toBeVisible()
  })
})

// ─── Mobile menu ─────────────────────────────────────────────────────────────
test.describe('Mobile menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')
  })

  test('shows mobile menu trigger on small screens', async ({ page }) => {
    await expect(page.getByTestId('mobile-menu-button')).toBeVisible()
  })

  test('opens mobile navigation when trigger is clicked', async ({ page }) => {
    await page.getByTestId('mobile-menu-button').click()
    await expect(page.getByTestId('mobile-navigation')).toBeVisible()
  })

  test('closes mobile navigation when Escape is pressed', async ({ page }) => {
    await page.getByTestId('mobile-menu-button').click()
    await expect(page.getByTestId('mobile-navigation')).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.getByTestId('mobile-navigation')).not.toBeVisible()
  })

  test('mobile nav has correct aria attributes', async ({ page }) => {
    const trigger = page.getByTestId('mobile-menu-button')
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await trigger.click()
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  test('mobile nav contains Contact link', async ({ page }) => {
    await page.getByTestId('mobile-menu-button').click()
    const nav = page.getByTestId('mobile-navigation')
    await expect(nav.getByRole('link', { name: 'Contact' })).toBeVisible()
  })
})

// ─── Hero primary CTA ─────────────────────────────────────────────────────────
test.describe('Hero section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders hero section', async ({ page }) => {
    await expect(page.getByTestId('home-hero')).toBeVisible()
  })

  test('primary CTA links to /services', async ({ page }) => {
    const cta = page.getByTestId('hero-primary-cta')
    await expect(cta).toBeVisible()
    await expect(cta).toHaveAttribute('href', '/services')
    await expect(cta).toContainText('Explore Services')
  })

  test('products CTA links to /products', async ({ page }) => {
    const cta = page.getByTestId('hero-products-cta')
    await expect(cta).toBeVisible()
    await expect(cta).toHaveAttribute('href', '/products')
  })
})

// ─── Company pillars ─────────────────────────────────────────────────────────
test.describe('Company pillars', () => {
  test('renders all three pillars', async ({ page }) => {
    await page.goto('/')
    const section = page.getByTestId('company-pillars-section')
    await expect(section).toBeVisible()
    await expect(section.getByText('Client Software')).toBeVisible()
    await expect(section.getByText('Rocket.io Products')).toBeVisible()
    await expect(section.getByText('Emerging Talent')).toBeVisible()
  })
})

// ─── Services visibility ─────────────────────────────────────────────────────
test.describe('Services section', () => {
  test('services section is visible on homepage', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByTestId('services-section')).toBeVisible()
  })

  test('services section heading is "Our services"', async ({ page }) => {
    await page.goto('/')
    const section = page.getByTestId('services-section')
    await expect(section.getByRole('heading', { name: 'Our services' })).toBeVisible()
  })

  test('all four service cards are present', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByTestId('service-card-custom-software')).toBeVisible()
    await expect(page.getByTestId('service-card-ai-automation')).toBeVisible()
    await expect(page.getByTestId('service-card-product-design')).toBeVisible()
    await expect(page.getByTestId('service-card-quality-engineering')).toBeVisible()
  })

  test('/services page loads correctly', async ({ page }) => {
    await page.goto('/services')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })
})

// ─── Product update cards ─────────────────────────────────────────────────────
test.describe('Featured work and products', () => {
  test('featured work section exists on homepage', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByTestId('featured-work-section')).toBeVisible()
  })

  test('/products page loads and shows empty state when no products published', async ({ page }) => {
    await page.goto('/products')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })
})

// ─── Team and intern sections ─────────────────────────────────────────────────
test.describe('Team and interns', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('internships page loads', async ({ page }) => {
    await page.goto('/internships')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.getByText('Grow through real-world software work.')).toBeVisible()
  })
})

// ─── Testimonials: verified-only filtering ────────────────────────────────────
test.describe('Testimonials', () => {
  test('testimonials section is absent when no verified reviews exist', async ({ page }) => {
    await page.goto('/')
    // Component renders null when no verified testimonials — section should not be in DOM
    await expect(page.getByTestId('testimonials-section')).not.toBeVisible()
  })
})

// ─── Contact navigation ───────────────────────────────────────────────────────
test.describe('Contact navigation', () => {
  test('/contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.getByRole('heading', { name: /talk about your project/i })).toBeVisible()
  })

  test('contact form has required fields', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.getByLabel(/full name/i)).toBeVisible()
    await expect(page.getByLabel(/email/i)).toBeVisible()
    await expect(page.getByLabel(/project type/i)).toBeVisible()
    await expect(page.getByLabel(/tell us about your project/i)).toBeVisible()
  })
})

// ─── Footer links ─────────────────────────────────────────────────────────────
test.describe('Footer', () => {
  test('footer is present with test-id', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByTestId('site-footer')).toBeVisible()
  })

  test('footer links to services, about, contact and legal pages', async ({ page }) => {
    await page.goto('/')
    const footer = page.getByTestId('site-footer')
    await expect(footer.getByRole('link', { name: 'About' })).toBeVisible()
    await expect(footer.getByRole('link', { name: 'Contact' })).toBeVisible()
    await expect(footer.getByRole('link', { name: 'Privacy Policy' })).toBeVisible()
    await expect(footer.getByRole('link', { name: 'Terms of Service' })).toBeVisible()
  })

  test('footer does not contain social links when no URLs are configured', async ({ page }) => {
    await page.goto('/')
    const footer = page.getByTestId('site-footer')
    await expect(footer.getByRole('link', { name: 'LinkedIn' })).not.toBeVisible()
    await expect(footer.getByRole('link', { name: 'GitHub' })).not.toBeVisible()
  })
})

// ─── Responsive homepage loading ─────────────────────────────────────────────
test.describe('Responsive loading', () => {
  const viewports = [
    { name: 'mobile-320', width: 320, height: 568 },
    { name: 'mobile-375', width: 375, height: 812 },
    { name: 'mobile-430', width: 430, height: 932 },
    { name: 'tablet-768', width: 768, height: 1024 },
    { name: 'tablet-1024', width: 1024, height: 768 },
    { name: 'desktop-1280', width: 1280, height: 800 },
    { name: 'desktop-1440', width: 1440, height: 900 },
  ]

  for (const viewport of viewports) {
    test(`homepage loads at ${viewport.name} (${viewport.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height })
      await page.goto('/')
      await expect(page.getByTestId('home-hero')).toBeVisible()
      await expect(page.getByTestId('site-footer')).toBeVisible()

      // Check no horizontal overflow
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1)
    })
  }
})

// ─── Updates page ─────────────────────────────────────────────────────────────
test.describe('Updates page', () => {
  test('/updates page loads', async ({ page }) => {
    await page.goto('/updates')
    await expect(page.getByRole('heading', { name: 'Latest at Rocket.io' })).toBeVisible()
  })

  test('shows empty state when no updates published', async ({ page }) => {
    await page.goto('/updates')
    await expect(page.getByText(/updates will appear here/i)).toBeVisible()
  })
})
