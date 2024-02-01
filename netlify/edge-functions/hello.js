export default async (request, context) => {
    context.log("Calling hello.js edge function.");
    return new Response('Hello, world from the edge!', {
        headers: {
            'content-type': 'text/html'
        }
    });
};