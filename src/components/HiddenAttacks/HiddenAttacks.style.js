import styled from 'styled-components'

export const Container = styled.div`
  width: 600px;
  height: 350px;

  h2 {
    font-size: 24px;
    color: var(--red);
    padding: 16px 0;
    text-align: center;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
`

export const Table = styled.table`
  display: grid;
  grid-template-rows: 1fr 7fr;
  align-items: center;
  background-color: var(--red);
  margin-bottom: 16px;
  color: var(--yellow);
  width: 100%;
  overflow: auto;
  max-height: 80%;
  font-size: 14px;

  thead {
    border-bottom: 1px solid var(--grey);
  }

  tr {
    display: grid;
    grid-template-columns: 2fr repeat(6, 1fr);
    padding-right: 16px;
  }

  td:first-child {
    text-align: left;
    padding-left: 16px;
    max-width: 120px;
  }

  th,
  td {
    text-align: center;
    padding: 8px 0;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
`
