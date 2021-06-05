export const useSaveModal = ({ closeModal }) => {
  const closeGreetingsModal = () => {
    localStorage.setItem('isFirstAccess', false)
    closeModal()
  }

  return {
    closeGreetingsModal
  }
}
