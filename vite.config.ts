import { createAppConfig } from '@nextcloud/vite-config'

export default createAppConfig({
	main: 'src/main.ts',
	public: 'src/public.ts',
	admin: 'src/admin.ts',
},
{
	inlineCSS: false,
})
