import { model } from 'mongoose';
import { ItemSchema } from '../schemas/item-schema';

const Item = model('items', ItemSchema);

export class ItemModel {
  async findById(itemId) {

    // 오브젝트 아이디 무조건 _ 하나여야 검증 가능
    const item = await Item.findOne({ _id: itemId}).exec();
    if(item.id !== itemId){
      return new Error("잘못된 아이디입니다 아이디를 확인해주세요")
    }

    return item;

  }

  async find(){
    const item = await Item.find({});
    return item;
  }

  async create(itemInfo) {
    const item = await Item.create(itemInfo);
    return item;
  }

  async delete(itemId) {
    const item = await Item.findOneAndDelete({id: itemId});
    return item;
  }

  async update(itemId, newInfo){
    console.log(itemId, newInfo)
    const updatedItem = await Item.updateOne({id: itemId}, newInfo);
    return updatedItem;
  }

}


const itemModel = new ItemModel();

export { itemModel };
