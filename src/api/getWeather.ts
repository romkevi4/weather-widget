import { OPEN_WEATHER, API_KEY } from '@/utils/resources'

export async function TrainsListApi(cityName: string) {
    return await fetch(`${OPEN_WEATHER}?q=${cityName}&appid=${API_KEY}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
        });
}