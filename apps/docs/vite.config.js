export default {
  plugins: [{
    name: 'vite-plugin-svgr',
    async config() {
      const svgr = await import('vite-plugin-svgr')
      return svgr.default()
    }
  }],
}
