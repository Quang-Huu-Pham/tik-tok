import * as httpRequest from '~/util/httpRequest';

export const video = async (type, page) => {
    try {
        const res = await httpRequest.get('videos', {
            params: {
                type,
                page,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
