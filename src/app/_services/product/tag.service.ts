import { Injectable } from '@angular/core';
import { Tag } from 'src/app/_models/product/tags.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  tagArray:Tag [] = [
    {id:1, name: 'tag1'},
    {id:2, name: 'tag2'},
    {id:3, name: 'tag3'},
    {id:4, name: 'tag4'},
    {id:5, name: 'tag5'},
    {id:6, name: 'tag6'},
    {id:7, name: 'tag7'},
    {id:8, name: 'tag8'},
  ]
  constructor() { }
  getAllTags():Tag[]{
    return this.tagArray;

 }
 getById(){}
 add(){}
 edit(){}
 delete(){}
}
