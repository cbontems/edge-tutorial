export default async (request, context) => {
    return new Response('Hello, world from the edge!', {
        headers: {
            'content-type': 'text/html'
        }
    });
};