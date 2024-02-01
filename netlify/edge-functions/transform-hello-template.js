export default async (request, context) => {
    const url = new URL(request.url);
    if (url.searchParams.get("method") !== "transform") {
        return; // serves static template
    }

    const response = await context.next();
    const page = await response.text();
    const regex = /LOCATION_UNKNOWN/i;
    const location = `${context.geo.city}, ${context.geo.country.name}`;

    const updated = page.replace(regex, location);
    return new Response(updated, response);
};