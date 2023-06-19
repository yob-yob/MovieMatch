// src/routes/login/+page.server.ts
import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { VERCEL_URL } from '$env/static/private';

export const load: PageServerLoad = async ({ locals: { getSession } }) => {
  const session = await getSession()

  // if the user is already logged in return them to the account page
  if (session) {
    throw redirect(303, '/account')
  }

  return { url: `https://${VERCEL_URL}` }
}
