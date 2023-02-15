import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PK: string;
  readonly SK: string;
  readonly companyName?: string | null;
  readonly companyEmail?: string | null;
  readonly companyNumber?: number | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phoneNumber?: number | null;
  readonly specialty?: string | null;
  readonly securityLevel?: number | null;
  readonly clinicName?: string | null;
  readonly dateOfBirth?: string | null;
  readonly gender?: string | null;
  readonly preferredContact?: string | null;
  readonly dementiaLikelihood?: string | null;
  readonly notes?: string | null;
  readonly tests?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PK: string;
  readonly SK: string;
  readonly companyName?: string | null;
  readonly companyEmail?: string | null;
  readonly companyNumber?: number | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phoneNumber?: number | null;
  readonly specialty?: string | null;
  readonly securityLevel?: number | null;
  readonly clinicName?: string | null;
  readonly dateOfBirth?: string | null;
  readonly gender?: string | null;
  readonly preferredContact?: string | null;
  readonly dementiaLikelihood?: string | null;
  readonly notes?: string | null;
  readonly tests?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}