/*
 * Students Messages
 *
 * This contains all the text for the Students container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.Students'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Students container!',
  },
})
