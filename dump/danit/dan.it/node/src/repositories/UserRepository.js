import BaseRepository from "./BaseRepository";

export class UserRepository extends BaseRepository {
	async find(options) {
		return this.models.UserModel.find(options);
	}

	async findOne(options) {
		return this.models.UserModel.findOne(options);
	}

	async create(options) {
		return this.models.UserModel.create(options);
	}
}