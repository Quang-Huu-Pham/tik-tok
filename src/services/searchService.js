import * as httpRequest from '~/util/httpRequest';

export const search = async (q, type) => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
