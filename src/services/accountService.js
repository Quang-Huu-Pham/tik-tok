import * as httpRequest from '~/util/httpRequest';

export const suggestedAccount = async (page, perpage) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perpage,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const followingsAccount = async (page) => {
    try {
        const res = await httpRequest.get('me/followings', {
            params: {
                page,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
