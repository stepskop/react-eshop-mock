import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";


export const client = sanityClient({
    projectId: '3g3e32vn',
    dataset: 'production',
    apiVersion: '2022-12-22',
    useCdn: true,
    token: import.meta.env.REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
})
const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)