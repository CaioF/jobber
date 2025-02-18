import { ID, ObjectType, Field } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export class AbstractModel {
  @Field(() => ID)
  id: number;
}
