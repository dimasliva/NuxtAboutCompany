export default defineNuxtPlugin((nuxtApp) => {
    const {accessToken} = useAuthTokenService()
    const { API_URL } = useApiConfig()
  
    const api = $fetch.create({
      baseURL: API_URL.root(),
      onRequest({ request, options, error }) {
        if (accessToken.value) {
          options.headers.set('Authorization', `Bearer ${accessToken.value}`)
        }
      },
      async onResponseError({ response }) {
        if (response.status === 401) {
          await nuxtApp.runWithContext(() => navigateTo('/login'))
        }
      }
    })
  
    // Expose to useNuxtApp().$api
    return {
      provide: {
        api
      }
    }
  })
  