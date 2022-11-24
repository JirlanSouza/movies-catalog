import { Id } from './Id';
export interface Repository<Entity> {
    save(entity: Entity): Promise<Entity>;
    update(id: Id, entity: Entity): Promise<Entity>;
    getById(id: Id): Promise<Entity | undefined>;
    getAll(): Promise<Entity[]>;
    delete(id: Id): Promise<void>;
}
