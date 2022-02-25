import request from '@/utils/request'

export type ComponentsResponse = {
  uid?: string
  username?: string
  password?: string
  nickname?: string
  avatar?: string
}

export type AddComponentsRequest = {
  tree: string
  framework: string
  comboComponentName: string
  description?: string
  previewImg?: string
}

export function addComponent(data: AddComponentsRequest) {
  return request<any>({
    url: '/bamboo/add-component',
    method: 'post',
    data
  })
}

export function getComponent() {
  return request<any>({
    url: '/bamboo/get-component',
    method: 'get'
  })
}

export function getComponentById(data) {
  return request<any>({
    url: '/bamboo/get-component-by-id',
    method: 'post',
    data
  })
}

export function updateComponent(data) {
  return request<any>({
    url: '/bamboo/update-component',
    method: 'post',
    data
  })
}

export function deleteComponent(data) {
  return request<any>({
    url: '/bamboo/delete-component',
    method: 'post',
    data
  })
}

export function searchComponent(data) {
  return request<any>({
    url: '/bamboo/search-component',
    method: 'post',
    data
  })
}
