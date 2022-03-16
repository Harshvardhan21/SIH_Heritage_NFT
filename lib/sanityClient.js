import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'fvhp6kk1',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skqAwJisaOSTvlibF5DiCQHca9IxaD5HjBPX0CjUi8pgCxjzsTjUQKuozI4Cu4bC5ZlNR1KBfwLy7BKcrM8IYsUAsuQP1geKfLVjpsYbdhL0Yx5yCVyHypFBGjTsCbHCeBRq5kmhODFQ6k3TPP6bGOG7mcQd3vmb5SjQ8IvAeG16Pm4ltpVZ',
  useCdn: false,
})
