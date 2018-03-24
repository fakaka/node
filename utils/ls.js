var lsUtil = {
    length: localStorage.length,
    get(key) {
        localStorage.getItem(key)
    },
    set(key, value) {
        localStorage.setItem(key, value)
    },
    getJSON(key) {
        JSON.parse(this.get(key))
    },
    setJSON(key, value) {
        this.set(key, JSON.stringify(value))
    },
    remove(key) {
        localStorage.removeItem(key)
    },
    removeAll() {
        localStorage.clear()
    },
    key(index) {
        localStorage.key(index)
    }
}