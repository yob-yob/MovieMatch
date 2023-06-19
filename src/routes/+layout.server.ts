// src/routes/+layout.server.ts

import { redirect } from '@sveltejs/kit'

export const load = async ({ locals: { getSession } }) => {
  return {
    session: await getSession(),
  }
}