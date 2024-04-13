<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rental>
 */
class RentalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "book_id" => fake()->numberBetween(1,50),
            "start_date" => fake()->date('Y_m_d'),
            "end_date" => fake()->date('Y_m_d'),
        ];
    }
}
