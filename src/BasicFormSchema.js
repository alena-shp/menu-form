import * as Yup from 'yup'

const BasicFormSchema = Yup.object().shape({
  search: Yup.string()
    .email('Invalid email address')
    .required('Required')
})
export default BasicFormSchema
