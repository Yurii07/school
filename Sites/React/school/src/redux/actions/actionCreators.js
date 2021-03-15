export default function createAction(type, payload = undefined) {
    return {
        type,
        ...payload !== undefined && { payload }
    }
}